#include "driver_dashboard.h"
#include <QtNetwork>
#include <iostream>
#include <cstring>
#include <QPainter>

Dashboard::Dashboard(QWidget *parent) : QWidget(parent){
    logedout=true;
    temperature = new QLabel("temperature:");
    temperature->setGeometry(10,200,140,50);
    QFont ftu("",12,75);
    temperature->setFont(ftu);
    temperature->setStyleSheet("font-weight: bold; color: black");
    temperature->setParent(this);

    humidity = new QLabel("humidty:");
    humidity->setGeometry(10,300,140,50);
    humidity->setFont(ftu);
    humidity->setStyleSheet("font-weight: bold; color: black");
    humidity->setParent(this);

    username=new QLabel("username");
    username->setGeometry(10,200,100,50);
    username->setFont(ftu);
    username->setStyleSheet("font-weight: bold; color: black");
    username->setParent(this);

    password=new QLabel("password");
    password->setGeometry(10,300,100,50);
    password->setFont(ftu);
    password->setStyleSheet("font-weight: bold; color: black");
    password->setParent(this);

    temperature->setVisible(false);
    humidity->setVisible(false);

    showtemperature = new QLineEdit("loading...");
    showtemperature->setReadOnly(true);
    showtemperature->resize(100,50);
    showtemperature->setGeometry(150,200,100,50);
    showtemperature->setStyleSheet("border:2px groove gray;border-radius:10px;padding:2px 4px");
    showtemperature->setParent(this);

    showhumidity = new QLineEdit("loading...");
    showhumidity->setReadOnly(true);
    showhumidity->resize(100,50);
    showhumidity->setGeometry(150,300,100,50);
    showhumidity->setStyleSheet("border:2px groove gray;border-radius:10px;padding:2px 4px");
    showhumidity->setParent(this);

    showtemperature->setVisible(false);
    showhumidity->setVisible(false);

    usernameinput = new QLineEdit("");
    usernameinput->resize(100,30);
    usernameinput->setGeometry(100,200,250,50);
    usernameinput->setStyleSheet("border:2px groove gray;border-radius:10px;padding:2px 4px");
    usernameinput->setParent(this);

    passwordinput = new QLineEdit("");
    passwordinput->resize(100,30);
    passwordinput->setGeometry(100,300,250,50);
    passwordinput->setEchoMode(passwordinput->Password);
    passwordinput->setStyleSheet("border:2px groove gray;border-radius:10px;padding:2px 4px");
    passwordinput->setParent(this);

    pageTitle=new QLabel("Driver Dashboard Page");
    QFont ft("",16,87);
    pageTitle->setFont(ft);
    pageTitle->setAlignment(Qt::AlignCenter);
    pageTitle->setGeometry(50,50,300,70);
    QPalette titlep;
    pageTitle->setAutoFillBackground(true);
    pageTitle->setPalette(titlep);
    pageTitle->setStyleSheet("QLabel{background-color:rgb(207,69,32);border:0px groove gray;border-radius:10px;padding:2px 4px}");

    pageTitle->setParent(this);


    login=new QPushButton;
    login->setStyleSheet("QPushButton{background-color:rgb(207,69,32);border:0px groove gray;border-radius:10px;padding:2px 4px;font-weight: bold; color: black}");
    login->setParent(this);
    login->setText("login");
    login->resize(80,50);
    login->move(250,400);
    login->setFont(ftu);


    btn=new QPushButton;
    btn->setStyleSheet("QPushButton{background-color:rgb(207,69,32);border:0px groove gray;border-radius:10px;padding:2px 4px;font-weight: bold; color: black}");
    btn->setParent(this);
    btn->setText("Emergency");
    btn->resize(120,50);
    btn->move(100,400);
    btn->setFont(ftu);
    btn->hide();

    logout=new QPushButton;
    logout->setStyleSheet("QPushButton{background-color:rgb(207,69,32);border:0px groove gray;border-radius:10px;padding:2px 4px;font-weight: bold; color: black}");
    logout->setParent(this);
    logout->setText("logout");
    logout->resize(120,50);
    logout->move(250,400);
    logout->setFont(ftu);
    logout->hide();

    tcpSocket=new QTcpSocket(this);
    tcpSocket->abort();
    tcpSocket->connectToHost("localhost", 5000);
}

void Dashboard::connecting(){
    usernameinput->setText("connecting...");
    passwordinput->setText("");
}



void Dashboard::loginPage(){
    temperature->setVisible(false);
    humidity->setVisible(false);
    showtemperature->setVisible(false);
    showhumidity->setVisible(false);
    btn->hide();
    logout->hide();

    username->setVisible(true);
    usernameinput->setVisible(true);
    password->setVisible(true);
    passwordinput->setVisible(true);
    login->show();
}

void Dashboard::sendInfo(){
    tcpSocket->write("||");
    QString Username=usernameinput->text();
    Username="u:"+Username;
    QByteArray uba = Username.toLatin1();
    char* u=uba.data();
    tcpSocket->write(u);
    tcpSocket->write("||");
    QString Password=passwordinput->text();
    Password="p:"+Password;
    QByteArray pba = Password.toLatin1();
    char* p=pba.data();
    tcpSocket->write(p);
    tcpSocket->write("||n:cargo_0||");
}

void Dashboard::Logout(){
    logedout=true;
    usernameinput->setText("");
    passwordinput->setText("");
}


void Dashboard::sendEnmergency(){
    if(logedout==false){
        tcpSocket->write("emergency happened");
    }
}

void Dashboard::sendNothing(){
    tcpSocket->write(".");
}

void Dashboard::showLoginWrong(){
    usernameinput->setText("Wrong, input username again");
    passwordinput->setText("");
}

void Dashboard::showLoginRight(){
    temperature->setVisible(true);
    humidity->setVisible(true);
    showtemperature->setVisible(true);
    showhumidity->setVisible(true);
    btn->show();
    logout->show();

    username->setVisible(false);
    usernameinput->setVisible(false);
    password->setVisible(false);
    passwordinput->setVisible(false);
    login->hide();
}

void Dashboard::receiveData(){
    QByteArray qbytearray=tcpSocket->read(11);
    QByteArray login=tcpSocket->readLine();
    QString loginstr=QString::fromUtf8(login);
    QString logincheck=loginstr.left(loginstr.indexOf(";"));
    QString thresholds=loginstr.right(loginstr.size() - (loginstr.lastIndexOf(";")+1));
    qDebug()<<loginstr<<","<<logincheck<<","<<thresholds;
    QStringList list=thresholds.split(",");
    QString templow;QString temphigh;QString humilow;QString humihigh;
    if(list.size()>3){
        templow=list[0];
        temphigh=list[1];
        humilow=list[2];
        humihigh=list[3];
    }
    qDebug()<<templow<<","<<temphigh<<","<<humilow<<","<<humihigh;
    if(logincheck.size()==1){
        if(logincheck=="F"){
            showLoginWrong();
        }
        else if(logincheck=="T"){
            showLoginRight();
            receive=true;
            logedout=false;
        }
    }
    if(receive==true && !logedout){
        if(qbytearray.size()!=0){
            QString qstr=QString::fromUtf8(qbytearray);
            qDebug()<<qstr;
            QStringList strlist=qstr.split(",");
            QString temp=strlist[0];
            QString humi=strlist[1];

            double tempcolor=temp.toDouble();
            double humicolor=humi.toDouble();
            double tempLow=templow.toDouble();
            double tempHigh=temphigh.toDouble();
            double humiLow=humilow.toDouble();
            double humiHigh=humihigh.toDouble();
            if(tempcolor>=tempLow && tempcolor<=tempHigh){
                emit goodtemp();
            }
            else{
               emit EnTemp();
            }
            if(humicolor>=humiLow && humicolor<=humiHigh){
                emit goodhumi();
            }
            else{
                emit EnHumi();
            }
            showtemp(temp.toDouble());
            showhumi(humi.toDouble());

        }
        else{
            qDebug()<<"don't have data from server!";
        }
    }
}

void Dashboard::showtemp(double tempnum){
    QString text=QString::number(tempnum,'f',2);
    showtemperature->setText(text);
}

void Dashboard::showhumi(double huminum){
    QString text=QString::number(huminum,'f',2);
    showhumidity->setText(text);
}

void Dashboard::tempEmergency(){
    qDebug()<<"come in";
    showtemperature->setStyleSheet("QLineEdit{background : rgb(207,69,32);border-radius:10px;padding:2px 4px;}");
}

void Dashboard::humiEmergency(){
    qDebug()<<"come in 2";
    showhumidity->setStyleSheet("QLineEdit{background : rgb(207,69,32);border-radius:10px;padding:2px 4px;}");

}

void Dashboard::normalTemp(){
    qDebug()<<"come out";
    showtemperature->setStyleSheet("QLineEdit{background : rgb(255,255,255);border-radius:10px;padding:2px 4px;}");
}

void Dashboard::normalHumi(){
    qDebug()<<"come out 2";
    showhumidity->setStyleSheet("QLineEdit{background : rgb(255,255,255);border-radius:10px;padding:2px 4px;}");
}


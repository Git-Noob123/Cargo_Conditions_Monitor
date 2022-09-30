#include "driver_dashboard.h"
#include <QtNetwork>

Dashboard::Dashboard(QWidget *parent) : QWidget(parent){
    temperature = new QLabel("temperature:");
    humidity = new QLabel("humidty");

    showtemperature = new QLineEdit("loading...");
    showtemperature->setReadOnly(true);
    showhumidity = new QLineEdit("loading...");
    showhumidity->setReadOnly(true);

    btn=new QPushButton;
    btn->setParent(this);
    btn->setText("Enmergency");
    btn->resize(100,80);
    btn->move(300,400);

    QGridLayout* dashboard=new QGridLayout;
    dashboard->addWidget(temperature,2,0);
    dashboard->addWidget(showtemperature,2,1);
    dashboard->addWidget(humidity,3,0);
    dashboard->addWidget(showhumidity,3,1);


    setLayout(dashboard);

    tcpSocket=new QTcpSocket(this);
    tcpSocket->abort();
    tcpSocket->connectToHost("localhost", 5000);



}

void Dashboard::sendEnmergency(){
    tcpSocket->write("emergency happened");
}

void Dashboard::sendNothing(){
    tcpSocket->write(".");
}

void Dashboard::receiveData(){
    QByteArray qbytearray=tcpSocket->read(11);

    if(qbytearray.size()!=0){
        QString qstr=QString::fromUtf8(qbytearray);
        qDebug()<<qstr;
        QStringList strlist=qstr.split(",");
        QString temp=strlist[0];
        QString humi=strlist[1];

        //This might be used in future*******
        /*double t=temp.toDouble();
        double h=humi.toDouble();
        if(t>=20 && t<=40){
            emit goodtemp();
        }
        else{
           emit EnTemp();
        }
        if(h>=40 && h<=70){
            emit goodhumi();
        }
        else{
            emit EnHumi();
        }*/
        //****************************************
        showtemp(temp.toDouble());
        showhumi(humi.toDouble());

    }
    else{
        qDebug()<<"don't have data from server!";
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
    QPalette p;
    p.setColor(QPalette::Base,Qt::red);
    showtemperature->setPalette(p);
}

void Dashboard::humiEmergency(){
    QPalette p;
    p.setColor(QPalette::Base,Qt::red);
    showhumidity->setPalette(p);
}

void Dashboard::normalTemp(){
    QPalette p;
    showtemperature->setPalette(p);
}

void Dashboard::normalHumi(){
    QPalette p;
    showhumidity->setPalette(p);
}


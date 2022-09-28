#include "driver_dashboard.h"
#include <QtNetwork>

Dashboard::Dashboard(QWidget *parent) : QWidget(parent){
    /*templ=0;temph=0;humil=0;humih=0;
    couldReceive=false;
    inputtl=false;inputth=false;inputhl=false;inputhh=false;*/

    temperature = new QLabel("temperature:");
    humidity = new QLabel("humidty");

    showtemperature = new QLineEdit;
    showtemperature->setReadOnly(true);
    showhumidity = new QLineEdit;
    showhumidity->setReadOnly(true);

    /*tl=new QLabel("minimum threshold for temperature (C)");
    th=new QLabel("maximum threshold for temperature (C)");
    hl=new QLabel("minimum threshold for humidity (%)");
    hh=new QLabel("maximum threshold for humidity (%)");

    itl=new QLineEdit;
    ith=new QLineEdit;
    ihl=new QLineEdit;
    ihh=new QLineEdit;*/

    QGridLayout* dashboard=new QGridLayout;
    dashboard->addWidget(temperature,2,0);
    dashboard->addWidget(showtemperature,2,1);
    dashboard->addWidget(humidity,3,0);
    dashboard->addWidget(showhumidity,3,1);
    /*dashboard->addWidget(tl,0,0);
    dashboard->addWidget(th,0,2);
    dashboard->addWidget(itl,0,1);
    dashboard->addWidget(ith,0,3);
    dashboard->addWidget(hl,1,0);
    dashboard->addWidget(hh,1,2);
    dashboard->addWidget(ihl,1,1);
    dashboard->addWidget(ihh,1,3);*/

    setLayout(dashboard);

    tcpSocket=new QTcpSocket(this);
    tcpSocket->abort();
    tcpSocket->connectToHost("192.168.1.6", 5000);

}

void Dashboard::receiveData(){
    QByteArray qbytearray=tcpSocket->read(11);

    if(qbytearray.size()!=0){
        QString qstr=QString::fromUtf8(qbytearray);
        qDebug()<<qstr;
        QStringList strlist=qstr.split(",");
        QString temp=strlist[0];
        QString humi=strlist[1];

        double t=temp.toDouble();
        double h=humi.toDouble();
        if(t>=20 && t<=30){
            emit goodtemp();
        }
        else{
            /*if(couldReceive){*/emit EnTemp();/*}*/
        }
        if(h>=40 && h<=60){
            emit goodhumi();
        }
        else{
            /*if(couldReceive){*/emit EnHumi();/*}*/
        }
        /*if(couldReceive){*/
        showtemp(temp.toDouble());
        showhumi(humi.toDouble());
        /*}*/

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

/*void Dashboard::tempLow(){
    this->templ=itl->text().toDouble();
    inputtl=true;
    qDebug()<<templ;
    if(inputtl && inputth && inputhl && inputhh){
        qDebug()<<"return true";
        checkall();
        couldReceive=true;
        emit allgood();
    }
}

void Dashboard::tempHigh(){
    this->temph=ith->text().toDouble();
    inputth=true;
    qDebug()<<temph;
    if(inputtl && inputth && inputhl && inputhh){
        qDebug()<<"return true";
        checkall();
        couldReceive=true;
        emit allgood();
    }
}

void Dashboard::HumiLow(){
    this->humil=ihl->text().toDouble();
    inputhl=true;
    qDebug()<<humil;
    if(inputtl && inputth && inputhl && inputhh){
        qDebug()<<"return true";
        checkall();
        couldReceive=true;
        emit allgood();
    }
}

void Dashboard::HumiHigh(){
    this->humih=ihh->text().toDouble();
    inputhh=true;
    qDebug()<<humih;
    if(inputtl && inputth && inputhl && inputhh){
        qDebug()<<"return true";
        checkall();
        couldReceive=true;
        emit allgood();
    }
}

void Dashboard::checkall(){
    if(inputtl && inputth && inputhl && inputhh){
        qDebug()<<"return true!!";
        couldReceive=true;
    }
}*/


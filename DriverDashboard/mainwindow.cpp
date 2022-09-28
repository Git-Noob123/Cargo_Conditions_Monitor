#include "mainwindow.h"
//#include "ui_mainwindow.h"
#include <iostream>
#include <QtDebug>
#include <QLayout>
#include <QGraphicsView>


MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent)
{

    this->dashboard=new Dashboard;

    dashboard->setParent(this);

    /*qDebug()<<"0";
    connect(dashboard->itl,SIGNAL(editingFinished()),dashboard,SLOT(tempLow()));
    connect(dashboard->ith,SIGNAL(editingFinished()),dashboard,SLOT(tempHigh()));
    connect(dashboard->ihl,SIGNAL(editingFinished()),dashboard,SLOT(HumiLow()));
    connect(dashboard->ihh,SIGNAL(editingFinished()),dashboard,SLOT(HumiHigh()));
    qDebug()<<"1";*/
    connect(dashboard,SIGNAL(EnTemp()),dashboard,SLOT(tempEmergency()));
    connect(dashboard,SIGNAL(EnHumi()),dashboard,SLOT(humiEmergency()));
    connect(dashboard,SIGNAL(goodtemp()),dashboard,SLOT(normalTemp()));
    connect(dashboard,SIGNAL(goodhumi()),dashboard,SLOT(normalHumi()));
    //qDebug()<<"2";


    //qDebug()<<"3";
    QTimer *timermain = new QTimer(this);
    connect(timermain,SIGNAL(timeout()),dashboard,SLOT(receiveData()));
    timermain->start(1000);

}

MainWindow::~MainWindow()
{

}


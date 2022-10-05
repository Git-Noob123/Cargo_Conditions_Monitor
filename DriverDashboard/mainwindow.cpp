#include "mainwindow.h"
#include <iostream>
#include <QtDebug>
#include <QLayout>
#include <QGraphicsView>


MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent)
{

    this->dashboard=new Dashboard;

    dashboard->setParent(this);
    connect(dashboard->btn,SIGNAL(clicked()),dashboard,SLOT(sendEmergency()));
    connect(dashboard,SIGNAL(EnTemp()),dashboard,SLOT(tempEmergency()));
    connect(dashboard,SIGNAL(EnHumi()),dashboard,SLOT(humiEmergency()));
    connect(dashboard,SIGNAL(goodtemp()),dashboard,SLOT(normalTemp()));
    connect(dashboard,SIGNAL(goodhumi()),dashboard,SLOT(normalHumi()));

    QTimer *timermain = new QTimer(this);
    connect(timermain,SIGNAL(timeout()),dashboard,SLOT(receiveData()));
    connect(timermain,SIGNAL(timeout()),dashboard,SLOT(sendNothing()));
    timermain->start(5000);



}

MainWindow::~MainWindow()
{

}


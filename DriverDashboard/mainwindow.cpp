#include "mainwindow.h"
#include <iostream>
#include <QtDebug>
#include <QLayout>
#include <QGraphicsView>


MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent)
{
    this->dashboard=new Dashboard;

    dashboard->setParent(this);

    connect(dashboard->login,SIGNAL(clicked()),dashboard,SLOT(sendInfo()));
    connect(dashboard->login,SIGNAL(clicked()),dashboard,SLOT(connecting()));
    connect(dashboard->logout,SIGNAL(clicked()),dashboard,SLOT(Logout()));
    connect(dashboard->logout,SIGNAL(clicked()),dashboard,SLOT(loginPage()));

    connect(dashboard->btn,SIGNAL(clicked()),dashboard,SLOT(sendEnmergency()));
    connect(dashboard,SIGNAL(EnTemp()),dashboard,SLOT(tempEmergency()));
    connect(dashboard,SIGNAL(EnHumi()),dashboard,SLOT(humiEmergency()));
    connect(dashboard,SIGNAL(goodtemp()),dashboard,SLOT(normalTemp()));
    connect(dashboard,SIGNAL(goodhumi()),dashboard,SLOT(normalHumi()));

    QTimer *timermain = new QTimer(this);
    connect(timermain,SIGNAL(timeout()),dashboard,SLOT(receiveData()));
    connect(timermain,SIGNAL(timeout()),dashboard,SLOT(sendNothing()));
    timermain->start(5000);


    //backgound image
    QPixmap pm(":/resources/background_img/truck2.jpg");
    pm=pm.scaled(this->size(),Qt::IgnoreAspectRatio);
    QPalette p;
    p.setBrush(QPalette::Window,pm);
    this->setPalette(p);
}

MainWindow::~MainWindow()
{

}


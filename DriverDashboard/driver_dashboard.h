#ifndef DRIVER_DASHBOARD_H
#define DRIVER_DASHBOARD_H
#include <QString>
#include <QWidget>
#include <QLabel>
#include <QLayout>
#include <QLineEdit>
#include <QPushButton>
#include <windows.h>
#include <QTcpSocket>
#include <QTimer>
#include <QPainter>

class Dashboard : public QWidget{
    Q_OBJECT
public:
    //sprint 1
    Dashboard(QWidget *parent = nullptr);
    QLabel* temperature;
    QLabel* humidity;
    QLineEdit* showtemperature;
    QLineEdit* showhumidity;
    QPushButton* btn;
    QTimer *timer;

    //sprint 2
    QLabel* username;
    QLabel* password;
    QLineEdit* usernameinput;
    QLineEdit* passwordinput;
    QPushButton* login;
    QPushButton* logout;

    //UI design
    QLabel* pageTitle;
    QPainter *painter;

public slots:
    //sprint 1
    void showtemp(double tempnum);  //show the temperature
    void showhumi(double huminum);  //show the humidity

    void tempEmergency();  //when the temperature is not normal, then the background turns to red
    void humiEmergency();  //when the humidity is not normal, then the background turns to red

    void normalTemp();
    void normalHumi();

    void receiveData();
    void sendEnmergency();
    void sendNothing();

    //sprint 2
    void sendInfo();
    void showLoginWrong();
    void showLoginRight();
    void Logout();
    void connecting();
    void loginPage();

signals:
    void TempData(double tempnum);
    void HumiData(double huminum);

    void EnTemp();
    void EnHumi();
    void goodtemp();
    void goodhumi();



private:
    QTcpSocket *tcpSocket;
    bool receive=false;
    bool logedout=true;
    QGridLayout* dashboard;
};


#endif // DRIVER_DASHBOARD_H

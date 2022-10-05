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

class Dashboard : public QWidget{
    Q_OBJECT
public:
    Dashboard(QWidget *parent = nullptr);
    QLabel* temperature;
    QLabel* humidity;
    QLineEdit* showtemperature;
    QLineEdit* showhumidity;
    QPushButton* btn;

    QTimer *timer;

    bool couldReceive;


public slots:
    void showtemp(double tempnum);  //show the temperature
    void showhumi(double huminum);  //show the humidity

    void tempEmergency();  //when the temperature is not normal, then the background turns to red
    void humiEmergency();  //when the humidity is not normal, then the background turns to red

    void normalTemp();
    void normalHumi();

    void receiveData();
    void sendEmergency();
    void sendNothing();

signals:
    void TempData(double tempnum);
    void HumiData(double huminum);

    void EnTemp();
    void EnHumi();
    void goodtemp();
    void goodhumi();



private:
    QTcpSocket *tcpSocket;
};


#endif // DRIVER_DASHBOARD_H

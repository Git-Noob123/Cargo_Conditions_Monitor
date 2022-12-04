/*  main.cpp     Ruiyang Jiang     Virginia Tech      September 27
 * This is the main file
 * Qt creater, using UI form design
*/


#include "mainwindow.h"

#include <QApplication>
#include <QtGui>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.setMaximumSize(400,500);
    w.setMinimumSize(400,500);
    w.show();
    return a.exec();
}

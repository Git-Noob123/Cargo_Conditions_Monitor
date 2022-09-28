#ifndef MAINWINDOW_H
#define MAINWINDOW_H
#include <QWidget>
#include <QtWidgets>
#include <QMainWindow>
#include "driver_dashboard.h"
#include "data_generator.h"

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    Dashboard* dashboard;

};
#endif // MAINWINDOW_H

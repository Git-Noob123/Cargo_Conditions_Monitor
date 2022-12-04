#server.py    Ruiyang Jiang    Virginia Tech      September 27
#This is the server file which generate the temperature data and humidity data
#It also create and extract the information from the database

from random import random
from re import T
import socket
import random
import time
from turtle import update
from typing import final
import pymongo



templow=20*9/5+32
temphigh=40*9/5+32
humilow=40
humihigh=70

myclient = pymongo.MongoClient("mongodb://localhost:2000/")# the address of url
mydb = myclient["cargos"] #the name of database
collection = mydb['cargo'] 
collection2 = mydb['driver_login']

def LoginInfo():
    user_1=({
        '_id':'driver_0',
        'username':'ruiyang',
        'password':'12345'
    })
    user_2=({
        '_id':'driver_1',
        'username':'jerry',
        'password':'1234'
    })
    user_3=({
        '_id':'driver_2',
        'username':'justin',
        'password':'123'
    })
    # result=collection2.insert_one(user_1)
    # result=collection2.insert_one(user_2)
    # result=collection2.insert_one(user_3)
    result=collection2.replace_one({"_id":user_1['_id']},user_1,upsert=True)
    result=collection2.replace_one({"_id":user_2['_id']},user_2,upsert=True)
    result=collection2.replace_one({"_id":user_3['_id']},user_3,upsert=True)


def insertOneData():
    cargo=({       
        '_id':'transistors#1', 
        'name':'transistors#1',
        'temperature':float(0),
        'humidity':float(0),
        'driver':'Mike',
        'notify':False,
        'tempThreshLow':float(-67.678),
        'tempThreshHigh':float(-1.2343),
        'humidThreshLow':float(3),
        'humidThreshHigh':float(90.34),
        'overseer':'Jerry',
        "ac": False,
        "heater": False,
        "humidifier": False,
        "dehumidifier": True
    })
    result=collection.replace_one({"_id":cargo['_id']},cargo,upsert=True)

def changename(username,cargoname):
    res=collection.update_one(filter={'name':cargoname},update={"$set":{'driver':username}})   

def checkUandP(a,b):
    myquery={"username":a,"password":b}
    for x in collection2.find(myquery):
        if x=="":
            return "F"
        else:
            if x['username']==a and x['password']==b:
                return "T"
            else:
                return "T"
    return "F"

def refreshDatabase(temp,humi,note):
    print(temp,humi,note,"in function")
    if note == True:
        res=collection.update_one(filter={'name':'transistors#1'},update={"$set":{'temperature':temp, 'humidity':humi,'notify':note}})     
    else: 
        res=collection.update_one(filter={'name':'transistors#1'},update={"$set":{'temperature':temp, 'humidity':humi}})

def getTempThresholdLow():
    myquery={"name": "transistors#1"}
    for x in collection.find(myquery):
        if x=="":
            return "-999"
        else:
            templ=str(x['tempThreshLow'])
            return templ

def getTempThresholdHigh():
    myquery={"name": "transistors#1"}
    for x in collection.find(myquery):
        if x=="":
            return "-999"
        else:
            temph=str(x['tempThreshHigh'])
            return temph

def getHumiThresholdLow():
    myquery={"name": "transistors#1"}
    for x in collection.find(myquery):
        if x=="":
            return "-999"
        else:
            humil=str(x['humidThreshLow'])
            return humil

def getHumiThresholdHigh():
    myquery={"name": "transistors#1"}
    for x in collection.find(myquery):
        if x=="":
            return "-999"
        else:
            humih=str(x['humidThreshHigh'])
            return humih


def getTemp():    #always save 5 digit result (including the dot and the negative sign), such as 3.245, 23.52, -12,4
    numforP=random.uniform(0,4)
    rightpart_one=str(random.randint(0,10))
    rightpart_two=str(random.randint(0,100))
    rightpart_three=str(random.randint(0,1000))
    if(numforP<=3):   #the probility of go into this one is 4/5
        leftpart=str(random.randint(templow,temphigh))
        if(len(leftpart)==1):
            temp=leftpart+'.'+rightpart_three
        elif(len(leftpart)==2):
            temp=leftpart+'.'+rightpart_two
        elif(len(leftpart)==3):
            temp=leftpart+'.'+rightpart_one
        temp=float(temp)
    elif(numforP>3 and numforP<=3.5):  #the probility of go into this one is 0.5/5
        leftpart=str(random.randint(-100,templow))
        if(len(leftpart)==1):
            temp=leftpart+'.'+rightpart_three
        elif(len(leftpart)==2):
            temp=leftpart+'.'+rightpart_two
        elif(len(leftpart)==3):
            temp=leftpart+'.'+rightpart_one
        elif(len(leftpart)==4):
            temp=leftpart
        temp=float(temp)
    else:#the probility of go into this one is 0.5/5
        leftpart=str(random.randint(temphigh,200))
        if(len(leftpart)==1):
            temp=leftpart+'.'+rightpart_three
        elif(len(leftpart)==2):
            temp=leftpart+'.'+rightpart_two
        elif(len(leftpart)==3):
            temp=leftpart+'.'+rightpart_one
        temp=float(temp)
       
    return temp

def getHumi():    #always save 5 digit result (including the dot and the negative sign), such as 3.245, 23.52, -12,4
    numforP=random.uniform(0,4)
    if(numforP<=3):
        humi=round(random.uniform(humilow,humihigh-1)+random.uniform(0,1),2)
        humi = str(humi)
        humi = humi.split('.')[0]+'.'+humi.split('.')[1][:2]
        if(len(humi.split('.')[1])==1):
            humi=humi+'1'
        humi=float(humi)
    elif(numforP>3 and numforP<=3.5):
        humi=round(random.uniform(0,humilow-1)+random.uniform(0,1),2)
        if(humi>0 and humi<10):
            humi = str(humi)
            humi = humi.split('.')[0]+'.'+humi.split('.')[1][:3]
            if(len(humi.split('.')[1])==1):
                humi=humi+'01'
            if(len(humi.split('.')[1])==2):
                humi=humi+'1'
            humi=float(humi)
        else:
            humi = str(humi)
            humi = humi.split('.')[0]+'.'+humi.split('.')[1][:2]
            if(len(humi.split('.')[1])==1):
                humi=humi+'1'
            humi=float(humi)
    else:
        humi=round(random.uniform(humihigh,99)+random.uniform(0,1),2)
        humi = str(humi)
        humi = humi.split('.')[0]+'.'+humi.split('.')[1][:2]
        if(len(humi.split('.')[1])==1):
            humi=humi+'1'
        humi=float(humi)
    return humi



def server_program():
    # get the hostname
    host = socket.gethostname()
    print(host)
    ip=socket.gethostbyaddr(host)
    print(ip)

    port = 5000  # initiate port number above 1024

    server_socket = socket.socket()  # get instance
    # look closely. The bind() function takes tuple as argument
    server_socket.bind(("localhost", port))  # '''host'''bind host address and port together
                        
    # configure how many client the server can listen simultaneously
    server_socket.listen(10)
    conn, address = server_socket.accept()  # accept new connection
    print("Connection from: " + str(address))
    
    refreshdata=False

    while True:         
        temp=getTemp()
        humi=getHumi()
        note=False
        #if temp<templow or temp>temphigh or humi<humilow or humi>humihigh:
            #note=True   #note is used in sendToDatabase() function
        Tempnum = str(temp)
        Huminum = str(humi)
        together=Tempnum+","+Huminum
        time.sleep(5.0)  #send data to client every 5 second
        print(together,note)
        conn.send(together.encode())  # send data to the client
        data=conn.recv(2048).decode()  # receive data stream. it won't accept data packet greater than 2048 bytes
        print(data)
        if data.find("||")!=-1:
            wordlist=data.split('||')
            finallist=[]
            for x in wordlist:
                if x!="emergency happened" and x!="." and x.find("emergency happened")==-1 and x!="":
                    finallist.append(x)          
            username=finallist[0].split("u:")[1]
            password=finallist[1].split("p:")[1]
            cargoname=finallist[2].split("n:")[1]
            print(username,password)
            checkdata=checkUandP(username,password)
            print(checkdata)
            if checkdata=="T":
                changename(username,cargoname)
                refreshdata=True
            conn.send(checkdata.encode())
        if data.find("emergency happened")!=-1:
            note=True
        if refreshdata==True:
            refreshDatabase(temp,humi,note)
            tempthreshlow=getTempThresholdLow()
            tempthreshhigh=getTempThresholdHigh()
            humithreshlow=getHumiThresholdLow()
            humithreshhigh=getHumiThresholdHigh()
            thresholds=";"+tempthreshlow+","+tempthreshhigh+","+humithreshlow+","+humithreshhigh
            print(thresholds)
            conn.send(thresholds.encode())
    
    conn.close()  # close the connection


if __name__ == '__main__':
    insertOneData()
    # LoginInfo()
    server_program()
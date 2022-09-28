from random import random
from re import T
import socket
import random
import time
#from unittest import result
import pymongo
#from pymongo import MongoClient
#
#Cargo 
#{
#  id:string(same value as name)
#  name:string
#  temperature:float
#  humidity:float
#  driver:string
#  notification:bool
#}

templow=20
temphigh=40
humilow=40
humihigh=70

myclient = pymongo.MongoClient("mongodb://localhost:2000/")#连接的URL地址
mydb = myclient["cargos"] #the name of database
collection = mydb['cargo']  

def sendToDatabase(idnum,name,temp,humi,driver,note):
    #mydb.cargo.drop()
    cargo=({       
        '_id':idnum,   #_id should not be the same
        'name':name,
        'temperature':temp,
        'humidity':humi,
        'driver':driver,
        'notification':note
    })
    result=collection.insert_one(cargo)
    print(result)

def getTemp():    #always save 5 digit result (including the dot and the negative sign), such as 3.245, 23.52, -12,4
    numforP=random.uniform(0,4)
    if(numforP<=3):   #the probility of go into this one is 4/5
        temp=round(random.uniform(templow,temphigh-1)+random.uniform(0,1),2)
        temp = str(temp)
        temp = temp.split('.')[0]+'.'+temp.split('.')[1][:2]  
        if(len(temp.split('.')[1])==1):
            temp=temp+'1'
        temp=float(temp)
    elif(numforP>3 and numforP<=3.5):  #the probility of go into this one is 0.5/5
        temp=round(random.uniform(-50,templow-1)+random.uniform(0,1),2)
        if(temp<-10):
            temp = str(temp)
            temp = temp.split('.')[0]+'.'+temp.split('.')[1][:1]
            temp=float(temp)
        elif(temp>0 and temp<10):
            temp = str(temp)
            temp = temp.split('.')[0]+'.'+temp.split('.')[1][:3]
            if(len(temp.split('.')[1])==1):
                temp=temp+'01'
            if(len(temp.split('.')[1])==2):
                temp=temp+'1'
            temp=float(temp)
        else:    #the probility of go into this one is 0.5/5
            temp = str(temp)
            temp = temp.split('.')[0]+'.'+temp.split('.')[1][:2]
            if(len(temp.split('.')[1])==1):
                temp=temp+'1'            
            temp=float(temp)
    else:
        temp=round(random.uniform(temphigh,59)+random.uniform(0,1),2)
        temp = str(temp)
        temp = temp.split('.')[0]+'.'+temp.split('.')[1][:2]
        if(len(temp.split('.')[1])==1):
            temp=temp+'1'
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

    port = 5000  # initiate port no above 1024

    server_socket = socket.socket()  # get instance
    # look closely. The bind() function takes tuple as argument
    server_socket.bind((host, port))  # bind host address and port together

    # configure how many client the server can listen simultaneously
    server_socket.listen(10)
    conn, address = server_socket.accept()  # accept new connection
    print("Connection from: " + str(address))
    
    i=0
    while True:
        # receive data stream. it won't accept data packet greater than 1024 bytes
        #data = conn.recv(2048).decode()
        temp=getTemp()
        humi=getHumi()
        note=False
        if(temp<templow or temp>temphigh or humi<humilow or humi>humihigh):
            note=True
        Tempnum = str(getTemp())
        Huminum = str(getHumi())
        together=Tempnum+","+Huminum
        time.sleep(1.0)
        #if not data:
            #if data is not received break
           #break
        #print("from connected user: " + str(data))
        print(together)
        #data = input(' -> ')
        conn.send(together.encode())  # send data to the client
        idnum=str('data_'+str(i)) # _id should not be the same
        name=idnum
        driver=str('Mike')
        #print(note)
        sendToDatabase(idnum,name,temp,humi,driver,note)
        i=i+1

    conn.close()  # close the connection


if __name__ == '__main__':
    #mydb.cargo.drop()    
    server_program()

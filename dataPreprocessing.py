import csv
import json
from sklearn.cluster import KMeans
import numpy as np

datasetRaw = open("201810-citibike-tripdata-nov-7-2018.csv", mode = "r")

attributes = datasetRaw.readline()
attributes = attributes.strip().split(",")

numDays = 31
'''with open('201810-citibike-tripdata-nov-7-2018.csv', 'r') as f:
    reader = csv.reader(f, delimiter='\n')
    data_list = list()
    for row in reader:
        element = row.split(",")
        data_list.append(element)
print(data_list[0])
print(data_list[1])
d = dict(zip(data_list[0]["bikeid"],data_list[1][1]))
print(d)'''
coordDir = {}
stations = {}
stationsUsage = {}

for line in datasetRaw:
    line = line.strip().split(",")
    coordDir[line[4]] = [float(line[5]), float(line[6])]
    if line[4] not in stations:
        stations[line[4]] = [1, float(line[0]), 0, 0, 0] # props: num trips, avg trip duration, #male,#fem,#cust
        if line[14] == "1":
            stations[line[4]][2] += 1
        if line[14] == "2":
            stations[line[4]][3] += 1
        if line[12] == '"Subscriber"':
            stations[line[4]][4] += 1
        stationsUsage[line[4]] = [0, 0 , 0, 0]
        date = line[1]
        dateArray = date.split(" ")
        hour = dateArray[1]
        hourArray = hour.split(":")
        h = int(hourArray[0])
        if h >= 5 and h <= 11: 
            stationsUsage[line[4]][0] += 1
        if h >= 12 and h <= 17 :
            stationsUsage[line[4]][1] += 1
        if h >= 18 and h <= 23:
            stationsUsage[line[4]][2] += 1
        if h >= 24 or h <= 4:
            stationsUsage[line[4]][3] += 1
    else:
        stations[line[4]][0] += 1
        stations[line[4]][1] = ((stations[line[4]][1]*(stations[line[4]][0]-1))+float(line[0]))/stations[line[4]][0]
        if line[14] == "1":
            stations[line[4]][2] += 1
        if line[14] == "2":
            stations[line[4]][3] += 1
        if line[12] == '"Subscriber"':
            stations[line[4]][4] += 1
        date = line[1]
        dateArray = date.split(" ")
        hour = dateArray[1]
        hourArray = hour.split(":")
        h = int(hourArray[0])
        if h >= 5 and h <= 11: 
            stationsUsage[line[4]][0] += 1
        if h >= 12 and h <= 17 :
            stationsUsage[line[4]][1] += 1
        if h >= 18 and h <= 23:
            stationsUsage[line[4]][2] += 1
        if h >= 24 or h <= 4:
            stationsUsage[line[4]][3] += 1

for stat in stationsUsage:
    stationsUsage[stat][0] /= numDays
    stationsUsage[stat][1] /= numDays
    stationsUsage[stat][2] /= numDays
    stationsUsage[stat][3] /= numDays


print((stations))

    #print(line[4])
print(attributes[1])
print(len(coordDir))
#data = [dict(zip(data_list[0],row)) for row in data_list]
#data.pop(0)
#with open('stationCoordinatesNew.json', 'w') as outfile:
#    json.dump(coordDir, outfile)
#print ("Dumped")

for s in stations:
    stations[s][0]
    stations[s][2]
    stations[s][3]
    stations[s][4]
#k-means clustering for stations
stationsNames = list(stations.keys())
stationsProps = list(stations.values())
X = np.array(stationsProps)
print("STARTING K-MEANS CLUSTERING")
labels = KMeans(n_clusters=5, random_state=0).fit_predict(X)
print("ENDED K-MEANS CLUSTERING")
print(labels)
for s in stations:
    stations[s][0]/=numDays
    stations[s][2]/=numDays
    stations[s][3]/=numDays
    stations[s][4]/=numDays
#second clustering only with num trips e avg trip time
stationsPropsSimple = []

for elem in list(stationsProps):
    stationsPropsSimple.append([elem[0]*numDays, elem[1]])
X2 = np.array(stationsPropsSimple)
print("STARTING K-MEANS CLUSTERING 2")
labels2 = KMeans(n_clusters=5, random_state=0).fit_predict(X2)
print("ENDED K-MEANS CLUSTERING 2")
print(labels2)


for i in range(0,len(stationsNames)):
    coordDir[stationsNames[i]].append(str(labels[i]))
    coordDir[stationsNames[i]].append(round(stations[stationsNames[i]][0],2))
    coordDir[stationsNames[i]].append(round(stations[stationsNames[i]][1], 2))
    coordDir[stationsNames[i]].append(round(stations[stationsNames[i]][2], 2))
    coordDir[stationsNames[i]].append(round(stations[stationsNames[i]][3], 2))
    coordDir[stationsNames[i]].append(round(stations[stationsNames[i]][4], 2))
    coordDir[stationsNames[i]].append(str(labels2[i]))
    stationsUsage[stationsNames[i]].append(str(labels[i]))
    stationsUsage[stationsNames[i]].append(stationsNames[i])
    stationsUsage[stationsNames[i]].append(str(labels2[i]))

print(coordDir)
#print((stationsUsage))
#save coord and cluster file
with open('stationCoordinatesClusters.json', 'w') as outfile:
    json.dump(coordDir, outfile)
print ("Dumped")

clusterNum = [0,0,0,0,0]
clusterTripNum = [0,0,0,0,0]

for st in stationsUsage:
    clusterNum[int(stationsUsage[st][4])] += 1 

for st in stationsUsage:
    clusterTripNum[int(stationsUsage[st][4])] += int(stations[st][0])

for i in range(0,5):
    clusterTripNum[i] /= clusterNum[i]

clusterNum2 = [0,0,0,0,0]
clusterTripNum2 = [0,0,0,0,0]

for st in stationsUsage:
    clusterNum2[int(stationsUsage[st][6])] += 1 

for st in stationsUsage:
    clusterTripNum2[int(stationsUsage[st][6])] += int(stations[st][0])

for i in range(0,5):
    clusterTripNum2[i] /= clusterNum2[i]



#generate database with station: name, avg# bikes used in morning, afternoon, night.

'''with open('stationCoordinatesClustersAndUsage.json', 'w') as outfile:
    json.dump(stationsUsage, outfile)
print ("Dumped")'''

tsvStations = open("stations.tsv", mode = "w")
tsvStations.write('name\tperiod\tbikes\tcluster1\tcluster2\tnum1\ttrip1\tnum2\ttrip2\n')

for stat in stationsUsage:
    tsvStations.write(stationsUsage[stat][5] + "\t")
    tsvStations.write("morning\t")
    tsvStations.write(str(round(stationsUsage[stat][0], 2)) + "\t")
    tsvStations.write(stationsUsage[stat][4] + "\t")
    tsvStations.write(stationsUsage[stat][6] + "\t")
    tsvStations.write(str(clusterNum[int(stationsUsage[stat][4])]) + "\t")
    tsvStations.write(str(round(clusterTripNum[int(stationsUsage[stat][4])],2)) + "\t")
    tsvStations.write(str(clusterNum2[int(stationsUsage[stat][6])]) + "\t")
    tsvStations.write(str(round(clusterTripNum2[int(stationsUsage[stat][6])],2)) + "\n")

    tsvStations.write(str(stationsUsage[stat][5]) + "\t")
    tsvStations.write("afternoon\t")
    tsvStations.write(str(round(stationsUsage[stat][1],2)) + "\t")
    tsvStations.write(stationsUsage[stat][4] + "\t")
    tsvStations.write(stationsUsage[stat][6] + "\t")
    tsvStations.write(str(clusterNum[int(stationsUsage[stat][4])]) + "\t")
    tsvStations.write(str(round(clusterTripNum[int(stationsUsage[stat][4])],2)) + "\t")
    tsvStations.write(str(clusterNum2[int(stationsUsage[stat][6])]) + "\t")
    tsvStations.write(str(round(clusterTripNum2[int(stationsUsage[stat][6])],2)) + "\n")

    tsvStations.write(str(stationsUsage[stat][5]) + "\t")
    tsvStations.write("evening\t")
    tsvStations.write(str(round(stationsUsage[stat][2],2)) + "\t")
    tsvStations.write(stationsUsage[stat][4] + "\t")
    tsvStations.write(stationsUsage[stat][6] + "\t")
    tsvStations.write(str(clusterNum[int(stationsUsage[stat][4])]) + "\t")
    tsvStations.write(str(round(clusterTripNum[int(stationsUsage[stat][4])],2)) + "\t")
    tsvStations.write(str(clusterNum2[int(stationsUsage[stat][6])]) + "\t")
    tsvStations.write(str(round(clusterTripNum2[int(stationsUsage[stat][6])],2)) + "\n")

    tsvStations.write(str(stationsUsage[stat][5]) + "\t")
    tsvStations.write("night\t")
    tsvStations.write(str(round(stationsUsage[stat][3],2)) + "\t")
    tsvStations.write(stationsUsage[stat][4] + "\t")
    tsvStations.write(stationsUsage[stat][6] + "\t")
    tsvStations.write(str(clusterNum[int(stationsUsage[stat][4])]) + "\t")
    tsvStations.write(str(round(clusterTripNum[int(stationsUsage[stat][4])],2)) + "\t")
    tsvStations.write(str(clusterNum2[int(stationsUsage[stat][6])]) + "\t")
    tsvStations.write(str(round(clusterTripNum2[int(stationsUsage[stat][6])],2)) + "\n")

tsvStations.close()
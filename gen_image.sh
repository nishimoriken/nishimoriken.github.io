#!/bin/bash
IND=0
for f in ~/Desktop/DSC*.JPG
do
    mv $f ./images/post${IND}.JPG
    ((IND+=1))
done

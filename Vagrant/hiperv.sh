#!/bin/bash
sudo apt-get upgrade -y
sudo apt-get update -y
sudo apt-get install linux-tools-generic linux-virtual-lts-xenial linux-tools-virtual-lts-xenial linux-cloud-tools-virtual-lts-xenial -y
sudo cp /usr/lib/linux-tools-4.4.0-210/hv_* /usr/sbin/
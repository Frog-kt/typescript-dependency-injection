PWD:=$(shell pwd)
TARGET=...

init:
	yarn install
	yarn postinstall
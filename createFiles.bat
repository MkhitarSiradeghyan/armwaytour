@echo off
if "%~1"=="" (
  echo Filename Not Found.
  exit /b 1
)

set "folder=%~1"
cd components
mkdir "%folder%" && type nul > "%folder%\%folder%.jsx" && type nul > "%folder%\%folder%.module.sass"
cd ..
echo Folder "%folder%" and files "%folder%.jsx" and "%folder%.sass" are created successfully
exit /b 0
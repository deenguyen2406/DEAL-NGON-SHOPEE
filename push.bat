@echo off
echo Đang chuẩn bị push code lên GitHub...
git add .
set /p msg="Nhap noi dung commit (hoac nhan Enter de dung mac dinh): "
if "%msg%"=="" set msg="Update code"
git commit -m "%msg%"
git push origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo [THANH CONG] Code da duoc day len GitHub!
) else (
    echo.
    echo [LOI] Khong the push code. Hay kiem tra ket noi mang hoac quyen truy cap.
)
pause

from flask import Flask
from flask import request
from flask import redirect
from flask import render_template
import json
app = Flask(
    __name__,
    static_folder="static",   #靜態檔案放的資料夾名稱
    static_url_path="/",  #靜態檔案對應的網址路徑    
)  

@app.route("/")
def index():
    return render_template("index.html")
    


#啟動網站伺服器，並更改埠號到等於3000
app.run(port=2000)


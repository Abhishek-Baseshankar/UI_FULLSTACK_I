import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# URL of the Cricbuzz website


def  getData():
    url = 'https://www.cricbuzz.com/live-cricket-scorecard/66218/rr-vs-dc-11th-match-indian-premier-league-2023'

    chrome_options = Options()

    chrome_options.add_argument('--headless')
    driver_path = 'chromedriver.exe'

    browser = webdriver.Chrome(driver_path,options=chrome_options)
    browser.get(url)
    try:
        # teamName = browser.find_element_by_xpath("//*[@id='innings_1']/div[1]/div[1]/span[1]")


        element = browser.find_element_by_xpath('//*[@id="innings_1"]/div[1]/div[1]/span[2]')
        element_text = element.text

        
    except:
        element_text = "Data Not Found or Match is over"

    print(element_text)

    mydata = {}
    if len(element_text) == 0:
        element_text = 'Data Not Found'
        
    mydata["live Score"]=element_text
    # mydata['teamName'] = teamName.text
    browser.quit()

    return mydata

    





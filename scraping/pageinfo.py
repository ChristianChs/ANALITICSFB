from facebook_scraper import *
from facebook_scraper import get_posts
from facebook_scraper import get_reactors
import pandas as pd
import os
import matplotlib.pyplot as plt
import json
# post_id='cesarhuarino'
# set_cookies("facebook.txt")

#print(get_page_info('juventudescesarhuarinopaz'))
# post=get_page_info('Cesarhuarino2022',cookies="facebook.txt")

#  with open(post_id + "_new.json", "w") as f:
#          json.dump(post, f, default=str, indent=4)
        
#print(get_page_info('100077780063872',cookies="facebook.txt"))
print(get_page_info('MovimientoIndependienteRegionalFuerzaTacna',cookies="./scraping/facebook.txt"))

from facebook_scraper import get_posts
import pandas as pd
import os
import matplotlib.pyplot as plt
import json
import time

#EXTRAE TODA LA INFORMACION DE UNA SOLA PUBLICACION Y LO ALMACENA EN UN JSON
#NUEVO CODIGO LIMPIO MEJORADO VERIFICA SI HAY NUEVOS COMENTARIOS // "comments": True QUITAR PARA NO OBTNER COMENTARIOS
post_id = "https://www.facebook.com/268928187075293/posts/1086843911950379/?flite=scwspnss"
postname = "encuesta"
filename = postname + ".json"
if os.path.isfile(filename):
    with open(filename, "r") as f:
        prev_post = json.load(f)

    top_level_comments = len(prev_post["comments_full"])
    replies = sum(len(c["replies"]) for c in prev_post["comments_full"])
    reactors = len(prev_post["reactors"])
    comment_times = [c["comment_time"] for c in prev_post["comments_full"]]
    print(
        f'''Cached version of post has:
        {prev_post["comments"]} comments
        from {min(comment_times)} to {max(comment_times)}
        {top_level_comments} top level comments
        {top_level_comments + replies} total comments extracted
        {prev_post["reaction_count"]} reactions
        {prev_post["reactions"]}
        {reactors} reactors'''
    )

else:
    prev_post = {}
    comment_start_url = None

post = next(get_posts(
    post_urls=[post_id],
    cookies="./scraping/facebook.txt",
    options={
        "allow_extra_requests": False,
        "reactions": True,
        "comment_reactors": False,
    },
))
time.sleep(5)
print(
    f'Live version of post has {post["comments"]} comments and {post["reaction_count"]} reactions'
)
if post["comments"] > prev_post.get("comments", 0) or post["reaction_count"] > prev_post.get("reaction_count", 0):
    print("Post has new data, refetching")
    post = next(get_posts(
        post_urls=[post_id],
        cookies="./scraping/facebook.txt",
        options={
            "allow_extra_requests": False,
            "comments": False,
            "reactors": True,
            "reactions": True,
            "comment_reactors": False,
        },
    ))
    time.sleep(5)
    with open("encuesta.json", "w") as f:
        json.dump(post, f, default=str, indent=4)

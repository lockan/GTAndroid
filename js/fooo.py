import urllib.request, re, html.parser

parsed_html = BeautifulSoup(html)

print(parsed_html.body.find('div', attrs={'class':'container'}).text)

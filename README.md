![image](https://github.com/user-attachments/assets/64124804-8f73-4b8c-9615-265df7d9b03a)# Twitter-BOT
![image](https://github.com/user-attachments/assets/49146768-71f5-4eb1-a053-e1f94cb1493a)

Setting Up the n8n Workflow 
1. Google Sheets Integration:
o Google Sheets is connected to n8n to read and fetch the manually entered data.
![image](https://github.com/user-attachments/assets/84137153-592b-4179-9dc6-31792a54f2ed)
2. Data Formatting & Organization: 
o An "Edit Fields" node is added to format and structure the data efficiently.
![image](https://github.com/user-attachments/assets/18033f89-8688-4fe3-b434-143c33bec0af)
3. Gathering Token Insights: 
o An HTTP Request node is integrated with Cohere AI to fetch real-time insights and analytics for
each token.
![image](https://github.com/user-attachments/assets/b8b94b54-b0e5-433e-8206-61f05df5b998)
4. Automated Tweet Generation: 
o Twitter API is connected to n8n, allowing the bot to post insights about trending tokens. 
5. Scheduled Execution: 
o A scheduling trigger is implemented to ensure that tweets are posted every hour automatically.

 API Authentication 
 Google Sheets Authentication: Configured in n8n to enable data retrieval. 
 Cohere AI Authentication: Implemented via HTTP Request Node to extract AI-powered insights. 
 Twitter API Authentication: Set up to enable seamless automated tweeting.
![image](https://github.com/user-attachments/assets/f2b4b172-6b35-4138-b412-35eb7b88b225)

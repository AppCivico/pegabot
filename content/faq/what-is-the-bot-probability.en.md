---
date: 2018-03-13T18:04:04-03:00
draft: false
id: "o-que-a-nota-significa"
title: "What do these results mean?"
layout: none
type: faq
weight: 4
---
**Bot Spotter** analyzes the posting history of the social network profile that you ask to be analyzed. At this time, **Bot Spotter** is based on behavior patterns to identify whether a human using that profile is more likely, or a robot. The criteria for making this assessment are the time interval between each post (a short interval between each post, 2 seconds for example, may indicate that the post was made by a robot); the frequency and randomness in the time the posts are made (posts always made at the same time, at 10 am, for example, may have been made by a robot); and the personality given to the posted texts (texts repeated or extracted from other publications, pre-formatted, are indicative of having been made by a robot). Based on the overall average of the profile posts, **Bot Spotter** gives a score, which indicates the probability of whether the profile is bot or not.
  
|   | Features for bot identification |
|---|---|
| Content (posts) | It is based on linguistic cues through natural language processing. Include frequency of verbs, nouns and adverbs in tweets. The system analyzes the length and entropy of the content of the tweet. Misleading messages generally display informal language and short phrases. |
| Feeling (emotional) | The various emotional states are extracted from the sentiment analysis of the tweets. A human usually expresses a variety of emotional states, while a bot does not. |
| User | User characteristics are based on account-related metadata. This data includes the number of friends and followers, the number of tweets produced by users, the description of the profile and the account settings (language, location, account creation date). |
| Friends | It includes statistics related to social contacts, such as the mean, the moments and the entropy of the distribution of the number of followers, followers and posts. Follower-follower relationships, retweets, and mentions are discussed. For each field, the characteristics on the use of the language, local time, popularity are extracted. |
| Network | The structure of the network shows various dimensions of the patterns of information dissemination. The system rebuilds three types of networks: retweets, mentions and hashtags co-occurrence. All networks are weighed according to the frequency of interaction or co-occurrences. |
| Time | The time characteristic captures patterns related to user activity. Includes the average period in content generation (tweets) and consumption (retweets), the time between two posts. |

Ferrara, E., Varol, O., Davis, C., Menczer, F. & Flammini, A.  (2016) The Rise of Social Bots. Communications of the ACM. DOI: 10.1145/2818717.

Varol, O., Ferrara, E., Davis, C., Menczer, F. & Flammini, A. (2017). Online Human-Bot Interactions: Detection, Estimation, and Characterization. arXiv preprint arXiv:1703.03107.

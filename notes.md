You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

Domains

Like - até 3 likes deve mostrar as pessoas que "gostaram", após isso, mostrar apenas 2 nomes e a soma do resto de pessoas que deram like.


# POMODORO 1

# Should return "no one likes this" when no names are sended. OK

# Should return the name of the person when only one name is sent. OK

# Should return the name of the 2 names who liked.OK

# Should return the three names who liked.OK

# Should return the first two names who liked and the number of the rest who liked

# In my cpu this server can handle 8 requests per second that is like :-
# loadtest -n 40 -c 2 --rps 4 http://localhost:5000
# where n is the tatal number of requests, rps is the requests per second and c is the concurrency which means how many time rps will be final rps here is 2 so 2*4rps=8 rps
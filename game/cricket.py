import random
def start():
	j=0
	i=1
	while (i!=j):
		sum1=0
		sum=0
		print("for bowling enter 1 ")
		print("for batting enter 2 ")
		c=int(input())
		while (i!=j):
			j=int(input())
			i=random.randint(1,6)
			print("    "+str(i))
			sum+=j
			sum1+=i
		if c==2:
			print(sum-j)
		else:
			print(sum1-i)
		i=0
		print("TO PLAY AGAIN ENTER ANY INTEGER EXPECT 0")
		print("TO EXIT ENTER 0")
		j=int(input())
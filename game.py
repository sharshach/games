#//created by Chilukuri Sri Harsha
#//created on 20June2019
check=0
check2=1
while check!=check2:
	print("SELECT THE GAME YOU WANT TO PLAY BY ENTERING THE CORROSPONDING NUMBER")
	print("1->hand cricket")
	choice=int(input())
	if choice==0:
		printf("confirm for exit")
	elif choice==1:
		import game.cricket
		game.cricket.start()
	else:
		print("Some error occoured")
	print("TO PLAY OTHER GAME ENTER ANY INTEGER EXPECT 0")
	print("TO EXIT ENTER 0")
	check2=int(input())


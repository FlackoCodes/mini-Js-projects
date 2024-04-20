import random

options = ['rock', 'paper', 'scissors']

computer_move = random.choice(options)

user = input('What is your move? \n Rock, Paper or scissors \n').lower()
print(user)

if user == 'rock' and computer_move == 'paper' or user == 'scissors' and computer_move == 'paper' or user == 'paper' and computer_move == 'rock':
    print(f'you chose {user} and computer chose {computer_move} you win!')
elif user == computer_move:
    print(f'you chose {user} and computer chose {computer_move}, tie game')
else:
    print(f'you chose {user} and computer chose {computer_move} you lose!')


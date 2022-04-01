package cardgame;

public class Gameengine {
	public void print()
	{
		System.out.print("player1 : ");
		for(int i=0;i<player2.size();i++)
		{
			System.out.print(player2.get(i).getSuit()+" "+player2.get(i).getRank()+",");
		}
		topPileCard=p1.topPileCard;
		System.out.println("\nTopPileCard : "+topPileCard.getSuit()+" "+topPileCard.getRank());
	}
	

}

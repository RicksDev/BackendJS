package Model;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Produto prod1 = new Produto();
		Alimento alimento1 = new Alimento();
		
		Eletronico eletro1 = new Eletronico();
		do {
			int escolha = 0;
			prod1.menu();
			escolha = sc.nextInt();
			
			switch (escolha) {
			case 1: {
				prod1.cadastrarProduto();
				continue;
				
			} case 2 : {
				alimento1.cadastrarAlimento();
				continue;
			} case 3 : {
				eletro1.cadastrarEletronico();
				continue;
			}
			default:
				System.out.println("Digite uma opção válida!!!");
				continue;
			}
		} while (true);
		


		
		
		
		
		
		
		
		
		
	}

}

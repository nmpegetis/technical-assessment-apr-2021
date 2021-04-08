package observer.stockmarketindices.main;

import observer.stockmarketindices.observable.Index1;
import observer.stockmarketindices.observable.Index2;
import observer.stockmarketindices.observable.Index3;
import observer.stockmarketindices.observers.MobileApp;
import observer.stockmarketindices.observers.WebApp;

/**
 * @author Nikolas Begetis
 */

public class ObserverMain {

	public static void main(String[] args) {
		//Create market indices
		Index1 index1 = new Index1();
		Index2 index2 = new Index2();
		Index3 index3 = new Index3();

		//Create Observers
		MobileApp mobile = new MobileApp();
		WebApp displayBoard = new WebApp();

		//Register Observers for each market index
		index1.registerObserver(mobile);
		index1.registerObserver(displayBoard);

		index2.registerObserver(mobile);
		index2.registerObserver(displayBoard);

		index3.registerObserver(mobile);
		index3.registerObserver(displayBoard);

		//Set some random values for the Market Indices
		for(int i =0; i<300; i++){
			index1.updateIndexValue((int)(Math.random()*101)+1);
			index2.updateIndexValue((int)(Math.random()*101)+1);
			index3.updateIndexValue((int)(Math.random()*101)+1);
		}	
	}
}

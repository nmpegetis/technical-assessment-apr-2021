package observer.stockmarketindices.observable;

import observer.stockmarketindices.observers.Observer;

/**
 * @author Nikolas Begetis
 */

public interface MarketIndexRoutines {
	void registerObserver(Observer observer);
	void notifyObservers();
	void removeObserver(Observer observer);
}

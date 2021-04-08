package observer.stockmarketindices.observable;

import java.util.*;

import observer.stockmarketindices.observers.Observer;

/**
 * @author Nikolas Begetis
 */

public abstract class Market implements MarketIndexRoutines {

	private final List<Observer> observers;
	private String name;
	private int value;

	public Market() {
		observers = new ArrayList<Observer>();
	}

	@Override
	public void registerObserver(Observer observer) {
		if(observer != null){
			this.observers.add(observer);
		}
	}

	public void notifyObservers() {
		for (Observer observer : observers) {
			observer.update(this);
		}
	}

	public void removeObserver(Observer observer) {
		if(observer != null){
			this.observers.remove(observer);
		}
	}

	public String getIndexName(){
		return name;
	}

	public int getIndexValue(){
		return value;
	}

	public void updateIndexValue(int updatedValue){
		this.value = updatedValue;
		this.notifyObservers();
	}

	public void setName(String stockName){
		this.name = stockName;
	}
}

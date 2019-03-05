package com.sinbon.tools;

import java.util.Calendar;
import java.util.Date;

public class Master implements Magic, Listener, Runnable {
	String masterName;
	long masterTime;
	Listener listener;
	int fightNumber = 3;
	int fightHitCount ;
	Date endfightTime;

	public Master(String masterName, long masterTime) {
		this.masterName = masterName;
		this.masterTime = masterTime;
	}

	@Override
	public void fireball(int hitCount) {
		long timeMin = Calendar.getInstance().getTimeInMillis();
		Date timeRule = Calendar.getInstance().getTime();;
		String masterMove = "Fire ball";
		this.onLoading(this.masterName, timeMin, masterMove , hitCount);
		if(hitCount ==2) {
		this.onDone(this.masterName,hitCount, timeRule);
		}
		
	}

	public void setListener(Listener listener) {
		this.listener = listener;
	}

	@Override
	public void onLoading(String name, long time, String move,int count) {
		// TODO Auto-generated method stub
		if (this.listener != null) {
			this.listener.onLoading(name, time, move, count);
		}
	}
	
	@Override
	public void onDone(String name , int fightCount, Date time) {
		// TODO Auto-generated method stub
		if(this.listener != null) {
			this.listener.onDone(this.masterName,fightCount, time);
		}

	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		for (int i = 0; i < fightNumber; i++) {
			try {
				Thread.sleep(this.masterTime);
				this.fireball(i);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}


}
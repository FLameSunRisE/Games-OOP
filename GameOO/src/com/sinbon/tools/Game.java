package com.sinbon.tools;

import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Game implements Runnable{

	Listener listener = new Listener() {

		@Override
		public void onLoading(String name, long time, String move , int count) {
			System.out.println("Name : "+name+"     "+"Time : "+time+"      "+"move : "+move + "   "+"Hitcount : " +count);
		}

		@Override
		public void onDone(String Name,int fightCount, Date time) {
			// TODO Auto-generated method stub
			System.out.println("1.Name : "+Name + "    2.FightCount : " + fightCount+"     3.EndHitTime : " + time+"      Done~~~~~~~");
		}
		
		
	};
	
	public void start() {
		ExecutorService es = Executors.newScheduledThreadPool(3);
		
		Master master = new Master("first",1000);
		Master master1 = new Master("Second",500);
		Master master2 = new Master("Thrid",1000);
		
		master.setListener(listener);
		master1.setListener(listener);
		master2.setListener(listener);
		
		es.execute(master);
		es.execute(master1);
		es.execute(master2);
		//thread  1's 0.6's
	}
	
	public void envent() {
		
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		
	}

}

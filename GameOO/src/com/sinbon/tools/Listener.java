package com.sinbon.tools;

import java.util.Date;

public interface Listener {
	void onLoading(String name,long time,String move , int count);
	void onDone(String name , int fightCount,Date time);
}

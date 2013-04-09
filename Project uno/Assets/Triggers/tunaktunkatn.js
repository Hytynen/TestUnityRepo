#pragma strict
var Target : Collider;
private var Triggered : int = 1;
var porpor : AudioClip;
function Start () {

}

function OnTriggerEnter(collision : Collider) {
	if (collision != Target){
		return;
	} else if(Triggered<5){	
	Triggered=Triggered+1;
	}
	else if(Triggered==5){
	audio.clip=porpor;
	audio.Play();
	Triggered=Triggered+1;
	}
}

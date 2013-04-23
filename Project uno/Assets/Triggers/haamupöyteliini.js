#pragma strict
var objekti : GameObject;
function Start () {

}

function Update () {
if (Input.GetButtonDown("Fire3")){
var sd : Rigidbody;
sd=objekti.AddComponent("Rigidbody");
}
}
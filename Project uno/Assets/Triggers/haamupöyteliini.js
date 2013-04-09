#pragma strict

function Start () {

}

function Update () {
var poyta=gameObject.Find("jakkarapöytä");
if (Input.GetButtonDown("Fire3")){
var sd : Rigidbody;
sd=poyta.AddComponent("Rigidbody");
}
}
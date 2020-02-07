const bil1 = document.getElementById('bil1')
const bil2 = document.getElementById('bil2')

const tambah = document.getElementById('tambah')
const kali = document.getElementById('kali')
const kurang = document.getElementById('kurang')
const mod = document.getElementById('mod')
const akar = document.getElementById('akar')
const bagi = document.getElementById('bagi')
const hasil = document.getElementById('hasil')
const delete1 = document.getElementById('delete')
let nilai = 0;
let bilSatu = 0
let bilDua = 0
bil1.addEventListener('input',function(e){
    let {value} = e.target
    bilSatu = parseInt(value)
    console.log(bilSatu)
})
bil2.addEventListener('input',function(e){
    let {value} = e.target
    bilDua = parseInt(value)
    console.log(bilDua)
})
tambah.addEventListener('click',function(){
    nilai = bilSatu + bilDua
    hasil.innerHTML = nilai
    console.log(nilai)
})
kali.addEventListener('click',function(){
    nilai = bilSatu * bilDua
    hasil.innerHTML = nilai
})
kurang.addEventListener('click',function(){
    nilai = bilSatu - bilDua
    hasil.innerHTML = nilai
})
bagi.addEventListener('click',function(){
    nilai = bilSatu / bilDua
    hasil.innerHTML = nilai
})
mod.addEventListener('click',function(){
    nilai= bilSatu % bilDua
    hasil.innerHTML = nilai
})
akar.addEventListener('click',function(){
   nilai = Math.sqrt(bilSatu)
    hasil.innerHTML = nilai
})
delete1.addEventListener('click',function(){
  hasil.innerHTML = ""
})

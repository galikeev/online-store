import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'}
        ];
        this._devices = [
            {id: 1, name: 'iPhone 12 Pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-lpc/1520633/ef2a27b6-800c-4a83-a864-192193c41b38/orig'},
            {id: 2, name: 'iPhone 12 Pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-lpc/1520633/ef2a27b6-800c-4a83-a864-192193c41b38/orig'},
            {id: 3, name: 'iPhone 12 Pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-lpc/1520633/ef2a27b6-800c-4a83-a864-192193c41b38/orig'},
            {id: 4, name: 'iPhone 12 Pro', price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-lpc/1520633/ef2a27b6-800c-4a83-a864-192193c41b38/orig'},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
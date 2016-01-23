/**
 * Created by kebab on 22-01-2016.
 */

const TemperatureC = "C";
const TemperatureK = "K";

var UnitTemperature = function(value, unit){
    this.valueInput = value;
    this.unitInput = unit;
    this.formelLetter = "T";
    this.valueSi=0.0;
    this.unitSi=TemperatureK;
    this.CalcSiValue();
};

UnitTemperature.prototype.CalcSiValue = function()
{
    var res = 0.0;
    switch (this.unitInput) {
        case TemperatureC:
            res = this.valueInput+273.15;
            break;
        case TemperatureK:
            res = this.valueInput;
            break;
    }
    this.valueSi = res;
};

UnitTemperature.prototype.GetSiString = function()
{
    return this.valueSi+ " " + TemperatureK;
};

UnitTemperature.prototype.GetInputString = function()
{
    switch (this.unitInput){
        case TemperatureC:
            return this.valueInput + " &degC";
        case TemperatureK:
            return this.GetSiString();
    }
    return "";
};

/*...................................................*/

const PressurePa = "Pa";
const PressureAtm = "atm";

var UnitPressure = function(value, unit){
    this.valueInput = value;
    this.unitInput = unit;
    this.formelLetter = "P";
    this.valueSi=0.0;
    this.unitSi=PressurePa;
    this.CalcSiValue();

};

UnitPressure.prototype.CalcSiValue = function()
{
    var res = 0.0;
    switch (this.unitInput) {
        case PressureAtm:
            res = this.valueInput*101325.0;
            break;
        case PressurePa:
            res = this.valueInput;
            break;
    }
    this.valueSi = res;
};

UnitPressure.prototype.GetSiString = function()
{
    return this.valueSi+ " Pa";
};

UnitPressure.prototype.GetInputString = function()
{
    switch (this.unitInput){
        case TemperatureC:
            return this.valueInput + " atm";
        case TemperatureK:
            return this.GetSiString();
    }
    return "";
};

/*...................................................*/

const VolumeL = "l";
const VolumeM3 = "m3";

var UnitVolume = function(value, unit){
    this.valueInput = value;
    this.unitInput = unit;
    this.formelLetter = "V";
    this.valueSi=0.0;
    this.unitSi=VolumeM3;
    this.CalcSiValue();
};

UnitVolume.prototype.CalcSiValue = function()
{
    var res = 0.0;
    switch (this.unitInput) {
        case VolumeL:
            res = this.valueInput/1000.0;
            break;
        case VolumeM3:
            res= this.valueInput;
            break;
    }
    this.valueSi = res;
};

UnitVolume.prototype.GetSiString = function()
{
    return this.valueSi+ " m<sup>3</sup>";
};

UnitVolume.prototype.GetInputString = function()
{
    switch (this.unitInput){
        case VolumeL:
            return this.valueInput + " l";
        case VolumeM3:
            return this.GetSiString();
    }
    return "";
};

/*...................................................*/

const MolarMol = "mol";

var UnitMolar = function(value, unit){
    this.valueInput = value;
    this.unitInput = unit;
    this.formelLetter = "n";
    this.valueSi=0.0;
    this.unitSi=MolarMol;
    this.CalcSiValue();

};

UnitMolar.prototype.CalcSiValue = function()
{
    var res = 0.0;
    switch (this.unitInput) {
        case MolarMol:
            res = this.valueInput;
            break;
    }
    this.valueSi = res;
};

UnitMolar.prototype.GetSiString = function()
{
    return this.valueSi+ " mol";
};

UnitMolar.prototype.GetInputString = function()
{
    switch (this.unitInput){
        case MolarMol:
            return this.GetSiString();
    }
    return "";
};

/*...................................................*/

const GasconstantJKmol = "JKmol";

var UnitGasconstant = function(value, unit){
    this.valueInput = value;
    this.unitInput = unit;
    this.formelLetter = "R";
    this.valueSi=0.0;
    this.unitSi=GasconstantJKmol;
    this.CalcSiValue();

};

UnitGasconstant.prototype.CalcSiValue = function()
{
    var res = 0.0;
    switch (this.unitInput) {
        case GasconstantJKmol:
            res = this.valueInput;
            break;
    }
    this.valueSi = res;
};

UnitGasconstant.prototype.GetSiString = function()
{
    return this.valueSi+ " JK<sup>-1</sup>mol<sup>-1</sup>";
};

UnitGasconstant.prototype.GetInputString = function()
{
    switch (this.unitInput){
        case GasconstantJKmol:
            return this.GetSiString();
    }
    return "";
};

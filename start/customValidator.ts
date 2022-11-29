/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import {validator} from '@ioc:Adonis/Core/Validator';


validator.rule("myRange" , (value , args:[number,number] , {pointer , arrayExpressionPointer , errorReporter}) => {
if(value < args[0] || value> args[1]){
    errorReporter.report(pointer , 'myRange' , 'myRange failed' , arrayExpressionPointer, {start:args[0] , end:args[1]})
}
}
)


import { Document, TrigonometryExpressionOperator } from 'mongoose';

export interface User extends Document {
    username:string
    password: string
}

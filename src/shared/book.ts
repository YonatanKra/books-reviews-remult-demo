import { Entity, Fields } from "remult";

@Entity("books", {
    allowApiCrud: true
})
export class Book {
    @Fields.cuid()
    id = '';
    @Fields.string()
    title = '';
    @Fields.boolean()
    isRead = false;
}
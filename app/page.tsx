import {cookies} from "next/headers";

export default function CourseComments() {
  async function addCommentToCourse() {
    'use server'
    //cookies().set("my_cookie", "qwerty123=");
    cookies().set("my_cookie", "qwerty123=", {encode: String});
  }
  
  return (
    <form action={addCommentToCourse}>
      <button type="submit">Add cookie</button>
    </form>
  )
}
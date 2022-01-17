# Directions Of Use
After cloning the repository, you can just normally run the HTML file.

I have used a text input field to demonstrate the example, but you can use it on any type of element.
But the element should have text in it, otherwise what's the point right !

So when you use it on a different element, just make sure to change the following things
1. Select the element, from which the text is to be extracted inside the `index.js` file
2. Extract the text value from it either using the `innerText` or in case of an **input** element, the `value` property.
3. Pass that value in the following code

```javascript
navigator.clipboard.writeText(newTextValue)
```

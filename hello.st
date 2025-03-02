(JS get:"console") log:"Hello, World!".

i := 1.
[i lessOrEqual:5] whileTrue:[
    (JS get:"console") log:('Count: ', i asString).
    i := i plus:1.
].

(JS get:"console") log:"Done!". 
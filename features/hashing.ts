
async function hashingOperations(){
    const password = '123456'
    const hash = await Bun.password.hash(password);
    console.log(hash);

    const isMatch = await Bun.password.verify(password, hash)

    console.log(isMatch);


    const argonHashExample = await Bun.password.hash(password, {
        algorithm: 'argon2id',
        memoryCost : 8,
        timeCost : 3
    })

    console.log(argonHashExample);

    // use bcrypt
    const bcryptHash = await Bun.password.hash(password, {
        algorithm: "bcrypt",
        cost: 4, // number between 4-31
        });
    console.log(bcryptHash)
}

hashingOperations();
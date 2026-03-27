Készíts egy EmployeeStatistics nevű osztályt, amely egy dolgozók adatait tartalmazó listából különböző statisztikai adatokat számít ki.
Az osztály konstruktorában egy Employee típusú (intafece-ű) listát várjon paraméterként, a típus az alábbi adatokat tartalmazza:
name (string) – Dolgozó neve
age (number) – Dolgozó életkora
salary (number) – Dolgozó fizetése
A konstruktor dobjon kivételt "A dolgozók megadása kötelező" szöveggel, ha a lista üres!

Implementáld az alábbi metódusokat az osztályban
getMaxSalary(): number: Visszaadja a legmagasabb fizetést (szám!).
getAverageAge(): number: Visszaadja a dolgozók átlagéletkorát.
getHighestPaidEmployee(): Employee: Visszaadja a legjobban fizetett dolgozót (objektumként).
countEmployeesOverSalary(salary: number): number: Visszaadja a salary összeg felett kereső dolgozók számát.

Készíts teszteket a konstruktorra és a 2. feladatban implementált függvényekre az órán tanult tesztelési keretrendszer segítségével. Minden függvényre legalább 2 különböző adathalmazzal készüljön teszteset. Amelyik függvénynek bemenő paramétere van ott legalább 3 különböző bemenő paraméterrel tesztelj.
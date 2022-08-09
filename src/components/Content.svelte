<script>
    import { db } from "../db";
    import { liveQuery } from "dexie";
    import { counter } from "../stores/counter";

    import dayjs from "dayjs";
    const today = dayjs();
    let birthday = "";
    $: diffDays = today.diff(birthday, "day");
    $: co2PerDate = 740; //g
    $: heavy = (co2PerDate * diffDays) / 1000 / 1000; // t

    async function saveBirthday() {
        try {
            const id = await db.users.add({
                birthday: birthday,
            });
        } catch (error) {
            console.error(error);
        }
    }

    let users = liveQuery(() => db.users.toArray());

    let current = 0;

    const unbindListener = counter.subscribe((value) => {
        console.log("counter value:", value);
        current = value;
    });

    const handleClickIncrease = () => {
        counter.set(counter.get() + 1);
    };

    const handleClickDecrease = () => {
        counter.set(counter.get() - 1);
    };
</script>

<div>
    <label>
        <span>生年月日</span>
        <input
            type="date"
            bind:value={birthday}
            on:change={saveBirthday}
            name="birthday"
            autocomplete="bday"
        />
    </label>
    <div class="flex gap-2">
        <button on:click={handleClickDecrease}>-</button>
        <button on:click={handleClickIncrease}>+</button>
        <p>current count: {current}</p>
    </div>
    <p>{birthday}</p>
    <p>{heavy}トン</p>
    <ul>
        {#if $users}
            {#each $users as user (user.id)}
                <li>{user.birthday}</li>
            {/each}
        {/if}
    </ul>
</div>

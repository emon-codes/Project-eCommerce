 function togglePasswordVisibility(id) {
            const input = document.getElementById(id);
            const icon = document.getElementById(`icon-${id}`);

            if (input.type === 'password') {
                input.type = 'text';
                icon.textContent = '🙈'; // লুকানো
            } else {
                input.type = 'password';
                icon.textContent = '👁️'; // দেখানো
            }
        }

        // ২. সাইনআপ হ্যান্ডলার ফাংশন (সব কাজ এখানে হবে)
        function handleSignup() {
            const email = document.getElementById('email').value;
            const pass = document.getElementById('password').value;
            const confirmPass = document.getElementById('confirmPassword').value;
            const name = document.getElementById('fullName').value;
            const msgBox = document.getElementById('msgBox'); // 'messageBox' থেকে 'msgBox' করা হয়েছে

            // মেসেজ বক্স পরিষ্কার করা এবং লুকানো
            msgBox.classList.add('hidden');
            msgBox.textContent = '';
            msgBox.className = 'p-3 text-sm rounded-lg'; // সব ক্লাস রিসেট

            // মেসেজ দেখানোর জন্য ছোট ফাংশন
            const showMsg = (message, type) => {
                msgBox.textContent = message;
                msgBox.classList.remove('hidden');
                
                if (type === 'error') {
                    msgBox.classList.add('bg-red-100', 'text-red-800');
                } else if (type === 'success') {
                    msgBox.classList.add('bg-green-100', 'text-green-800');
                }
            };

            // পাসওয়ার্ড ম্যাচিং চেক
            if (pass !== confirmPass) {
                showMsg('পাসওয়ার্ড দুটি মিলছে না। আবার চেষ্টা করুন।', 'error');
                return;
            }

            // সফল হলে মেসেজ দেখাও
            showMsg(`অভিনন্দন, ${name}! অ্যাকাউন্ট তৈরি হয়েছে।`, 'success');

            // আসল কাজ: ডেটা সেভ করা বা API কল করা
            console.log('Signup Successful:', { name, email, pass });
        }
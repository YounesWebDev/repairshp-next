INSERT INTO "tickets"
("customer_id", "title", "description", "completed", "tech")
VALUES
-- Customer 1: John Doe
(1, 'Laptop not starting', 'Customer reports the laptop does not power on after pressing the power button.', false, 'Mike'),
(1, 'Battery replacement', 'Battery drains very quickly and needs inspection or replacement.', false, 'Mike'),
(1, 'Windows update issue', 'System gets stuck during Windows update installation.', true, 'Sarah'),

-- Customer 2: Sarah Smith
(2, 'Screen flickering', 'Monitor flickers intermittently while working.', false, 'John'),
(2, 'Keyboard not working', 'Some keys stop responding randomly during typing.', true, 'John'),
(2, 'Slow computer', 'Desktop performance is very slow when opening applications.', false, 'Emma'),

-- Customer 3: Michael Johnson
(3, 'Wi-Fi connection problem', 'Laptop disconnects from Wi-Fi every few minutes.', false, 'David'),
(3, 'Overheating issue', 'Device becomes very hot after 10 minutes of use.', false, 'David'),
(3, 'Fan noise', 'Cooling fan makes loud noise during startup.', true, 'Emma'),

-- Customer 4: Emily Brown
(4, 'Printer not detected', 'Computer cannot detect the connected printer.', false, 'Sarah'),
(4, 'Blue screen error', 'System crashes with a blue screen after login.', false, 'Mike'),
(4, 'Software installation help', 'Customer needs help installing accounting software.', true, 'John'),

-- Customer 5: David Wilson
(5, 'Hard drive failure', 'Customer hears clicking noise from hard drive and cannot access files.', false, 'Emma'),
(5, 'Email setup', 'Needs business email configured on laptop and phone.', true, 'Sarah'),
(5, 'PC cleanup', 'Computer needs virus scan and general cleanup.', false, 'David');